'use client';

import React from 'react';

const PlanDetailSkeleton = () => {
  return (
    <div className="flex flex-col px-6 animate-pulse">
      <div className="w-full">
        <div className="h-8 bg-gray-300 rounded w-1/3 mt-12" />
        <div className="h-4 bg-gray-300 rounded w-1/4 mt-2 mb-5" />

        <div className="flex row gap-5 items-center">
          <div className="flex flex-row items-center gap-1 text-sm">
            <div className="h-4 w-4 bg-gray-300 rounded-full" />
            <div className="h-4 bg-gray-300 rounded w-16" />
          </div>
          <div className="flex flex-row items-center gap-1 text-sm">
            <div className="h-4 w-4 bg-gray-300 rounded-full" />
            <div className="h-4 bg-gray-300 rounded w-16" />
          </div>
        </div>

        <div className="border-t border-gray-200 my-6" />

        <div className="h-6 bg-gray-300 rounded w-1/4 mb-2" />
        <div className="flex flex-col gap-4">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="flex justify-between">
              <div className="h-4 bg-gray-300 rounded w-1/3" />
              <div className="h-4 bg-gray-300 rounded w-1/4" />
            </div>
          ))}
        </div>

        <div className="border-t border-gray-200 my-6" />

        <div className="h-6 bg-gray-300 rounded w-1/4 mb-2" />
        <div className="flex flex-row justify-start items-center gap-4 border border-gray-200 rounded-lg p-5 mt-2">
          <div className="h-8 w-8 bg-gray-300 rounded-full" />
          <div className="flex flex-col gap-3">
            <div className="h-4 bg-gray-300 rounded w-2/3" />
            <div className="h-4 bg-gray-300 rounded w-1/2" />
            <div className="h-4 bg-gray-300 rounded w-1/4" />
          </div>
        </div>

        <div className="flex flex-row justify-between my-10 items-center">
          <div className="flex flex-row justify-center items-center gap-2">
            <div className="h-6 bg-gray-300 rounded w-16" />
          </div>
          <div className="flex flex-row gap-4 justify-center items-center">
            <div className="h-10 bg-blue-300 rounded-md w-24" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanDetailSkeleton;
