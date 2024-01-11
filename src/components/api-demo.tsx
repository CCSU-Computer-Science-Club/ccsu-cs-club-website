import React from 'react';

const GreetingComponent = ({ hello }: { hello: any }) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <p className="text-2xl text-black dark:text-white">
        {hello ? hello.greeting : "Loading tRPC query..."}
      </p>
    </div>
  );
};

export default GreetingComponent;