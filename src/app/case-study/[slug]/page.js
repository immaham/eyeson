"use client";
import { useParams } from "next/navigation";
import HeroSectionNav from "./../../components/HeroSectionNav";
import CasestudyPageHeader from "./../../components/CasestudyPageHeader";
import CasestudyPageMainImage from "@/app/components/CasestudyPageMainImage";
import CasestudyPageOverview from "@/app/components/CasestudyPageOverview";
import CasestudyPageScope from "@/app/components/CasestudyPageScope";
import CasestudyPageTD from "@/app/components/CasestudyPageTD";
import CasestudyPageGallery from "@/app/components/CasestudyPageGallery";
import CasestudyPageResults from "@/app/components/CasestudyPageResults";
import CasestudyPageNext from "@/app/components/CasestudyPageNext";
import CasestudyLine from "@/app/components/CasestudyLine";
import { useState, useEffect } from "react";

const page = () => {
  const params = useParams(); // Access params in client components
  const { slug } = params;

  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchItems() {
      try {
        const response = await fetch(`/api/casestudy/${slug}`);
        const data = await response.json();
        setItems(data);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        console.error("Error fetching cards:", error);
        setIsLoading(false);
      }
    }
    fetchItems();
  }, [slug]);

  const savedata = { ...items };
  console.log(savedata);

  if (isLoading) {
    return (
      <div className="loading">
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="page-not-found">
        <p>Error: {error}</p>
      </div>
    );
  }

  if (!items) {
    return (
      <div className="page-not-found">
        <p>Page Not Found</p>
      </div>
    );
  }
  return (
    <div className="casestudy-page-container">
      <HeroSectionNav />
      <section className="casestudy-page-wrapper">
        <CasestudyPageHeader
          brand={savedata.brand}
          title={savedata.title}
          description={savedata.description}
        />
        <CasestudyPageMainImage mainImage={savedata.mainImage} />
        <CasestudyPageOverview
          projectInitiation={savedata.projectInitiation}
          contentCreation={savedata.contentCreation}
        />
        <CasestudyPageScope scope={savedata.scope} />
        <CasestudyPageTD tools={savedata.tools} duration={savedata.duration} />
        <CasestudyPageGallery gallery={savedata.gallery} />
        <CasestudyLine />
        <CasestudyPageResults results={savedata.results} />
        <CasestudyPageNext brand={savedata.brand} title={savedata.title} />
      </section>
    </div>
  );
};

export default page;
