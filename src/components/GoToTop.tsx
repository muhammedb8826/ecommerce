import { RxPinTop } from "react-icons/rx";

const GoToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
        <button type="button" className="flex items-center w-full justify-end gap-2 text-sky-600 p-4" onClick={scrollToTop}>
          To the top <RxPinTop className="text-sky-600" />
        </button>
  );
}

export default GoToTop
