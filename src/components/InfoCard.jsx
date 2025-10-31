const InfoBlock = ({ title, description, children }) => {
  return (
    <div className="infoblock liquid-glass">
      <h2 className="infoblock__title">{title}</h2>
      <p className="infoblock__description">{description}</p>
      <div className="infoblock__content">{children}</div>
    </div>
  );
};

export default InfoBlock;