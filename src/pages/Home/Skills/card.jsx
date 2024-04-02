export const Card = ({skill}) => {

    const {name,sequence,percentage,image} = skill || {} 

    
    return (
        
        <div
          className="rounded-lg bg-[#202020a2]  p-4 shadow-sm"
        >
            <div className="flex justify-between items-center pb-6">
            <img
            src={image.url}
            alt="Image"
            className=" w-16 h-16 object-cover "
          />
          <p>{percentage} <span className="text-primary-color">%</span></p>
            </div>
          <div className="grid gap-2">
            <h3 className="text-2xl font-bold">{name}</h3>
            <p className="mt-3 text-[#b1b1b1] text-lg dark:text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            </p>
            <div className="flex items-center justify-between">
            </div>
          </div>
        </div>
      
    );
};

