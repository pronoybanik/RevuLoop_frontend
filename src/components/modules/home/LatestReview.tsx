"use client";

import { useEffect, useState } from "react";
import LatestReviewCard from "@/components/cards/LatestReviewCards";
import PrimaryButton from "@/components/shared/PrimayButton";
import { getAllReview } from "@/services/Review";
import { TReview } from "@/types/review";
import Link from "next/link";
import Image from "next/image";

const LatestReview = () => {
  const [reviews, setReviews] = useState<TReview[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setIsLoading(true);
        const data = await getAllReview();
        const reviewsData = await data.data;
        setReviews(reviewsData || []);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchReviews();
  }, []);

  // Process the reviews data
  const publishedReviews = reviews
    .filter((item: TReview) => item.status === "PUBLISHED")
    .sort((a: TReview, b: TReview) => {
      const dateA = new Date(a.createdAt).getTime() || 0;
      const dateB = new Date(b.createdAt).getTime() || 0;
      return dateB - dateA;
    })
    .slice(0, 8);

  return (
    <div className="relative py-16 bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5"></div>
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-gradient-to-br from-blue-400/20 to-transparent rounded-full blur-3xl -translate-x-1/2"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-purple-400/20 to-transparent rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full text-sm font-medium text-gray-700 shadow-sm mb-4">
            <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-2 animate-pulse"></span>
            Fresh Customer Insights
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Latest{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Customer Reviews
            </span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover what real customers are saying about their experiences with top products and services
          </p>
        </div>

        {/* Loading State */}
        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(8)].map((_, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 animate-pulse"
                style={{ height: "auto" }} // Removed fixed height for flexibility
              >
                <div className="h-4 bg-gray-200 rounded mb-4"></div>
                <div className="h-3 bg-gray-200 rounded mb-2"></div>
                <div className="h-3 bg-gray-200 rounded w-2/3 mb-4"></div>
                <div className="flex space-x-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-4 h-4 bg-gray-200 rounded-full"></div>
                  ))}
                </div>
                <div className="h-20 bg-gray-200 rounded"></div>
              </div>
            ))}
          </div>
        ) : (
          <>
            {/* Reviews Content */}
            {publishedReviews.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {publishedReviews.map((review: TReview) => (
                  <div
                    key={review.id}
                    className="transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
                    style={{ height: "auto" }} // Removed fixed height for flexibility
                  >
                    <LatestReviewCard review={review} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-white rounded-2xl shadow-sm">
                <div className="max-w-md mx-auto">
                  <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg
                      className="w-10 h-10 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.291-1.002-5.824-2.58M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    No reviews yet
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Be the first to share your experience with our products and services.
                  </p>
                </div>
              </div>
            )}
          </>
        )}

        {/* View All Button */}
        <div className="mt-12 text-center w-40 mx-auto">
          <Link href="/reviews">
            <PrimaryButton className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
              <span className="flex items-center space-x-2">
                <span>View All Reviews</span>
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </span>
            </PrimaryButton>
          </Link>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[{
            label: "Verified Reviews", value: "50K+", color: "from-blue-400 to-blue-600"
          },
          {
            label: "Satisfied Customers", value: "98%", color: "from-green-400 to-green-600"
          },
          {
            label: "Product Categories", value: "200+", color: "from-purple-400 to-purple-600"
          },
          {
            label: "New Reviews Daily", value: "100+", color: "from-yellow-400 to-orange-500"
          }
          ].map((stat, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-md p-6 text-center">
              <div className={`text-3xl sm:text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                {stat.value}
              </div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestReview;
