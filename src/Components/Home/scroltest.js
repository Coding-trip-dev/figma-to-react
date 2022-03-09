import React from 'react';

function scroltest() {
  return (
    <div id="vertical">
      <section className="active cursorWrap" style={{ backgroundColor: "red" }}>
        <div className="inner">Vertical 1</div>
      </section>
      <section className="cursorWrap" style={{ backgroundColor: "green" }}>
        <div className="inner">Vertical 2</div>
      </section>
      <section className="cursorWrap" style={{ backgroundColor: "pink" }}>
        <div className="inner">Vertical 3</div>
      </section>
      <section className="cursorWrap" style={{ backgroundColor: "orange" }}>
        <div className="inner">Vertical 3</div>
      </section>
      <section className="cursorWrap" style={{ backgroundColor: "red" }}>
        <div className="inner">Vertical 3</div>
      </section>
      <section className="cursorWrap" style={{ backgroundColor: "blue" }}>
        <div className="inner">Vertical 3</div>
      </section>
      <section className="cursorWrap" style={{ backgroundColor: "gray" }}>
        <div className="inner">Vertical 3</div>
      </section>
    </div>
  );
}

export default scroltest