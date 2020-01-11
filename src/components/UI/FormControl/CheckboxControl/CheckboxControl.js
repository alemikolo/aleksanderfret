import React, { Component } from "react";
import { withTranslation } from "react-i18next";
import withValidation from "../withValidation/withValidation";
import Error from "../../Error/Error";
import FontIcon from "../../../UI/FontIcon/FontIcon";
import Label from "../ControlLabel/ControlLabel";
import classes from "./CheckboxControl.scss";
import * as icons from "../../FontIcon/FontIconTypes/FontIconsTypes";

class CheckboxControl extends Component {
  state = {
    checked: false
  };

  onPressOK = event => {
    if (event.keyCode === 13 || event.keyCode === 32) {
      this.checkboxClickHandler();
    }
  };

  checkboxClickHandler = () => {
    const checked = !this.state.checked;
    this.setState(() => ({ checked }));
    this.props.changeHandler(checked);
  };

  labelClickedHandler = event => {
    event.preventDefault();
    this.checkboxClickHandler();
  };

  render() {
    const validationClasses = this.props
      .getValidationClasses()
      .map(validationClass => classes[validationClass] || "");
    const checkboxClasses = [classes.Checkbox, ...validationClasses];

    return (
      <React.Fragment>
        <span
          className={checkboxClasses.join(" ")}
          name={this.props.name}
          id={this.props.name}
          role={this.props.config.subtype}
          checked={this.state.checked}
          aria-checked={this.state.checked}
          tabIndex="0"
          value={this.props.value}
          aria-labelledby={`${this.props.name}`}
          onClick={this.checkboxClickHandler}
          onFocus={() => {
            document.addEventListener("keydown", this.onPressOK);
          }}
          onBlur={() => {
            document.removeEventListener("keydown", this.onPressOK);
          }}
        >
          {this.state.checked && <FontIcon iconType={icons.OK} />}
        </span>
        {this.props.config.label && (
          <Label
            label={this.props.config.label}
            clicked={this.labelClickedHandler}
            required={this.props.config.rules.required}
            controlId={this.props.name}
            openTip={this.props.openTip}
          />
        )}
        {this.props.error && <Error message={this.props.t(this.props.error)} />}
      </React.Fragment>
    );
  }
}

export default withValidation(withTranslation("contact")(CheckboxControl));
