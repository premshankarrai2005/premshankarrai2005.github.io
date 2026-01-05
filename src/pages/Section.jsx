const Section = ({ id, icon: Icon, title, children }) => {
    return (
        <section
            id={id}
            className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 transition-colors duration-300"
        >
            <div className="max-w-6xl mx-auto">
                <div className="flex items-center gap-4 mb-12">
                    <Icon className="w-8 h-8 text-cyan-500 dark:text-cyan-400" /> 
                    <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white">
                        {title}
                    </h2>
                </div>

                <div className="text-gray-700 dark:text-gray-300">
                    {children}
                </div>
            </div>
        </section>
    );
};

export default Section;
