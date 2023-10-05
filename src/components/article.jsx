import React, {useEffect, useState} from "react";


const Article = ({articles}) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        // Update data when articles change
        setData(articles);
    }, [articles]);

    return (
        <div>
            {data && (
                (data.planets?.length > 0 || data.moons?.length > 0) ? (
                    <>
                        <p className="">Planets:</p>
                        <ul>
                            {data.planets?.map((article) => (
                                <li key={article.name}>{article.name}</li>
                            ))}
                        </ul>
                        <p className="">Moons:</p>
                        <ul>
                            {data.moons?.map((article) => (
                                <li key={article.name}>{article.name}</li>
                            ))}
                        </ul>
                    </>
                ) : (
                    <p>No articles</p>
                )
            )}
        </div>
    );
};

export default Article;
