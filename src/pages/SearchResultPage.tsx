import { useSelector } from "react-redux";
import ErrorComponent from "../components/ErrorComponent";
import LoadingComponent from "../components/LoadingComponent";
import BackButton from "../components/BackButton";

type RootState = {
    card: {
      homePageData: {
        searchResults: [];
        isLoading: boolean;
        error: null;
      };
    };
  };

  type Card = {
    id: string | number;
    price: number;
    title: string;
    description: string;
    image: string;
    tag: string;
    location: string;
  };
  

const SearchResultPage = () => {
    const {searchResults, isLoading, error } = useSelector(
        (store: RootState) => store.card.homePageData
      );
      
if (isLoading) {
    return (
    <LoadingComponent />
      );
  }

    if (error) {
        return (
        <ErrorComponent error={error} />
        );
    }


  return (
    <div>
        <BackButton />
      {searchResults.map((result: Card) => (
        <div key={result.id}>
            <h2>{result.title}</h2>
            <p>{result.description}</p>
            <p>{result.price}</p>
            <p>{result.location}</p>
            <p>{result.tag}</p>
            <img src={result.image} alt={result.title} />
        </div>
            ))
      }
    </div>
  )
}

export default SearchResultPage
