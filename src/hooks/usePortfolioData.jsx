import { useQuery } from "@tanstack/react-query";
import { getPortfolioData } from "../api/utils";

const url =
  "https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae";

  export const usePortfolioData = () => {
    const { data: portfolioData, isLoading } = useQuery({
      queryFn: async () => await getPortfolioData(url),
      queryKey: ["portfolio-data"],
    });
  
    if (!isLoading && portfolioData && portfolioData.user) {
      const {
        about,
        username,
        email,
        role,
        timeline,
        skills,
        youtube,
        projects,
        social_handles,
        services,
        testimonials,
        createdAt,
        updatedAt,
      } = portfolioData.user;

      return {
        isLoading,
        about,
        username,
        email,
        role,
        timeline,
        skills,
        youtube,
        projects,
        social_handles,
        services,
        testimonials,
        createdAt,
        updatedAt,
      };
    }
  
    return { isLoading };
  };
  