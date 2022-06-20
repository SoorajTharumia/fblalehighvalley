import "./header.css"

const Header = () => {
    return (
      <div>
        <h1 className="header" style={{ color: "#24498a", fontSize: "30px" }}>
          <em>Explore the Lehigh Valley!</em>
        </h1>

        <h1
          className="description"
          style={{
            color: "black grey",
            fontSize: "17px",
            textAlign: "justify",
          }}
        >
          The Lehigh Valley is a metropolitan region located in eastern
          Pennsylvania and parts of northwestern New Jersey. Three major cities
          make up the Lehigh Valley, being Allentown, Bethlehem, and Easton.
          Each city has many attractions and things to see. Allentown, the 3rd
          largest city in Pennsylvania, is the heart of the Lehigh Valley,
          housing tons of museums, historic centers, and more! Historic
          Bethlehem has tons of historical sites open to the public, with some
          dating back to the Revolutionary War! Can't forget about Easton, which
          has attractions very popular to the public, with some factories of the
          brands you love! The area is located in the heart of all the action,
          with easy access to many major cities of the United States, including
          Philadelphia, New York City, and Washington DC! The region fosters a
          sense of community, and it is a great place for people of all ages to
          enjoy, so utilizing this tourism assistance website, you can find all
          the attractions in town that you need to see! So, what are you waiting
          for? Go ahead! Type in one of the attributes and explore the Lehigh
          Valley!{" "}
        </h1>
      </div>
    );
}

export default Header
