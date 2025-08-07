export const Image = ({ className, classNameWrapper, url }) => {
  return (
    <div className={`${classNameWrapper}`}>
      <img className={`${className} w-full h-full`} src={url}/>
    </div>
  );
};
