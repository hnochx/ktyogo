const PlanChangeSkeleton = () => {
  return (
    <>
      <div className="flex flex-col gap-3 animate-pulse">
        <div className="w-20 rounded-lg h-5 bg-gray-200" />
        {[...Array(5)].map((_, index) => (
          <div
            key={index}
            className="w-full border border-neutral-300 rounded-xl h-28 px-3 py-5 flex flex-col gap-3 animate-pulse"
          >
            <div className="flex flex-row gap-2">
              <div className="size-5 rounded-full bg-gray-200" />
              <div className="w-1/2 rounded-xl bg-gray-200 h-4" />
            </div>
            <div className="flex flex-col gap-1.5">
              <div className="w-1/2 bg-gray-200 h-3 rounded-lg" />
              <div className="w-2/3 bg-gray-200 h-3 rounded-lg" />
              <div className="w-1/2 bg-gray-200 h-3 rounded-lg" />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default PlanChangeSkeleton;
