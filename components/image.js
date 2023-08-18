export function ImgDetail({ image }) {
    return (
      <img
        src={`/${image}.png`}
        className="object-cover rounded shadow-lg h-[66vh] w-full"
      />
    );
  }