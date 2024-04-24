import React, { useEffect, useState } from "react";

import Loading from "../components/Loading";
import Error from "../components/Error";

const Quote = () => {
  const [quote, setQuote] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        setIsLoading(true);
        const category = "success";
        const apiKey = "VI0Rn7COJ1AFccREn6LQYpZX9S2jnq2N046Vk5vm";
        const headers = {
          "X-Api-Key": apiKey,
        };
        const url = `https://api.api-ninjas.com/v1/quotes?category=${category}`;
        const response = await fetch(url, { headers });
        if (!response.ok) {
          throw new Error("Error fetching the quote");
        }
        const data = await response.json();
        setQuote(data[0]);
        setIsLoading(false);
      } catch (error) {
        setError("Error fetching the quote");
        setIsLoading(false);
      }
    };
    fetchQuote();
  }, []);

  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    return <Error message={error} />;
  }
  return (
    <div className="p-4 bg-blue-100 rounded shadow-md mt-4 w-[90%] mx-auto">
      <p className="text-center text-gray-700 text-sm sm:text-2xl md:text-3xl lg:text-4xl">
        "{quote.quote}"
        <span className="block text-right text-gray-500 text-sm sm:text-xl md:text-2xl lg:text-3xl">
          - {quote.author}
        </span>
      </p>
    </div>
  );
};

export default Quote;
