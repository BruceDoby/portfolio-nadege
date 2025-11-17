const InfoBlock = ({ title, description, text, children }) => {
  return (
    <div className="infoblock liquid-glass">
      <h2 className="infoblock__title">{title}</h2>
      <p className="infoblock__description">{description}</p>
      {text && <div className="infoblock__content">{text}</div>}
      {children && <div className="infoblock__icon">{children}</div>}
    </div>
  );
};

export default InfoBlock;