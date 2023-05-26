

const CategoryTitle = ({subHeading, heading}) => {
    return (
        <div className="md:w-4/12 text-center font-semibold mx-auto my-8 ">
            <p className="text-yellow-500 italic mb-2">---{subHeading}---</p>
            <h1 className="text-4xl border-y-4 uppercase py-4">{heading}</h1>
        </div>
    );
};

export default CategoryTitle;