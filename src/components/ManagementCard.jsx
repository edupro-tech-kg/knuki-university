import Button from "./UI/Button";

function ManagementCard({ name, post, onOpenModal, btnText }) {

  const splitName = (fullName) => {
    const words = fullName.trim().split(/\s+/);
    
    if (words.length <= 2) {
      return {
        firstLine: fullName,
        secondLine: ""
      };
    } else {
      const firstLine = words.slice(0, 2).join(" ");
      const secondLine = words.slice(2).join(" ");
      return { firstLine, secondLine };
    }
  };

  const { firstLine, secondLine } = splitName(name);

  return (
    <div className="flex-shrink-0 w-full flex flex-col rounded-lg bg-white p-1.5 sm:p-3">
  
      <div className="w-full aspect-[5/6] bg-gray-100 rounded-md mb-2 sm:mb-4 flex items-center justify-center overflow-hidden">
        <span className="text-gray-400 text-xs sm:text-sm">Photo</span>
      </div>


      <div className="flex flex-col flex-1 text-center">
        <div className="mb-0.5 sm:mb-1">
          <p className="font-bold text-sm sm:text-base leading-tight">{firstLine}</p>
          {secondLine && (
            <p className="font-bold text-sm sm:text-base leading-tight">{secondLine}</p>
          )}
        </div>
        
        <div className="min-h-[2rem] sm:min-h-[3rem] mb-0.5 sm:mb-1 flex items-center justify-center">
          <p className="text-gray-600 text-xs sm:text-sm leading-tight line-clamp-2">{post}</p>
        </div>

  
        <div className="mt-auto sm:pt-1.5">
          <Button
            variant="secondary"
            onClick={onOpenModal}
            className="w-full sm:py-2 text-lg sm:text-sm"
          >
            {btnText}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ManagementCard;