function BoxColor({ r, g, b }) {
  const boxStyle = {
    backgroundColor: `rgb(${r}, ${g}, ${b})`,
    padding: "20px",
    margin: "10px 0",
    textAlign: "center",
    color: (r*0.299 + g*0.587 + b*0.114) > 186 ? "black" : "white", 
    fontWeight: "bold",
    borderRadius: "5px",
  };

  const toHex = (c) => c.toString(16).padStart(2, "0");
  const hex = `#${toHex(r)}${toHex(g)}${toHex(b)}`;

  return (
    <div style={boxStyle}>
      rgb({r},{g},{b})<br />
      {hex}
    </div>
  );
}

export default BoxColor;
