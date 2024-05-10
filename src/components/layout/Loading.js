import React from "react";

const Loading = ({ isLoading }) => {
  return (
    <>
      {isLoading && (
        <div className="fixed w-full h-[100vh] top-0 left-0 bg-[rgba(0,0,0,0.1)] flex items-center justify-center">
          <img
            src={process.env.PUBLIC_URL + "/gifs/loading.gif"}
            alt="loading"
          />
        </div>
      )}
    </>
  );
};

export default Loading;
