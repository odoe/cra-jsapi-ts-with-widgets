// @ts-nocheck
/** @jsxRuntime classic */
/** @jsx tsx */

import {subclass, property} from "@arcgis/core/core/accessorSupport/decorators";

import Widget from "@arcgis/core/widgets/Widget";

import { renderable, tsx } from "@arcgis/core/widgets/support/widget";

const CSS = {
  base: "esri-hello-world",
  emphasis: "esri-hello-world--emphasis"
};

@subclass("esri.widgets.HelloWorld")
class HelloWorld extends Widget {

  //--------------------------------------------------------------------------
  //
  //  Properties
  //
  //--------------------------------------------------------------------------

  //----------------------------------
  //  firstName
  //----------------------------------

  @property()
  @renderable()
  firstName: string = "John";

  //----------------------------------
  //  lastName
  //----------------------------------

  @property()
  @renderable()
  lastName: string = "Smith";

  //----------------------------------
  //  emphasized
  //----------------------------------

  @property()
  @renderable()
  emphasized: boolean = false;

  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------


  render() {
    const greeting = this._getGreeting();
    const classes = {
      [CSS.emphasis]: this.emphasized
    };

    return (
      <div class={this.classes(CSS.base, classes)}>
        {greeting}
      </div>
      );
  }

  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------

  private _getGreeting(): string {
    return `Hello, my name is ${this.firstName} ${this.lastName}!`;
  }

}

export default HelloWorld;