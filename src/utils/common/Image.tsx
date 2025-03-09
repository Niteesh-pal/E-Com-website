function getImageUrl(name: string) {
  return new URL(`../../assets/images/${name}`, import.meta.url);
}

function Image(
  name: string,
  className: string | undefined = '',
  width: string = '100%',
  height: string = '100%',
  br: string = '0rem',
) {
  const image = getImageUrl(name);

  const imageStyle = {
    width: width || '100%',
    height: height || '100%',
    borderRadius: br || '0px',
  };
  console.log('image=>', name);
  if (!className) {
    className = undefined;
  }
  if (image.pathname.includes('/src/utils/common/undefined')) {
    return <img src="" alt={name} style={{ width: '10px', height: '10px' }} />;
  }
  return (
    <img className={className} style={imageStyle} src={image.href} alt={name} />
  );
}

export { Image };
