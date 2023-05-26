
const Container = ({ children }) => {
    return (
        <div className="max-w-screen-lg sm:p-4 px-8 md:p-0 mx-auto">
            {children}
        </div>
    );
};

export default Container;