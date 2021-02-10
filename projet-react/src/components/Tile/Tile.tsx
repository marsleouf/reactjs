import React from "react";
import classNames from "classnames";
import "./Tile.module.css";
import { Props } from "./types";
export default class Tile extends React.PureComponent<Props> {
render() {
    const { id, chipType, onClick = () => {} } = this.props;
    const chipCssClass = classNames("chip", chipType === "red" ? "red" : "yellow");
    
    return (
      <div className={"tile"} onClick={() => onClick(id)}>
        {chipType && <div className={chipCssClass} />}
      </div>
    );
  }
}