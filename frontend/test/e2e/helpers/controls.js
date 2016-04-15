(function () {
  'use strict';

  function Field(e) {
    if (!e) {
      throw new Error('element must not be null');
    }
    this.element = e;
  }

  Field.prototype.getValue = function () {
    return this.element.getAttribute('value');
  };

  Field.prototype.clearValue = function () {
    return this.element.clear();
  };

  Field.prototype.setValue = function (text) {
    this.element.clear();
    return this.element.sendKeys(text);
  };


  function Button(e) {
    if (!e) {
      throw new Error('element must not be null');
    }
    this.element = e;
  }

  Button.prototype.click = function () {
    return this.element.click();
  };

  function getFieldById(inputId) {
    return new Field(element(by.id(inputId)));
  }

  function getFieldByModel(model) {
    return new Field(element(by.model(model)));
  }

  function getButtonById(buttonId) {
    return new Button(element(by.id(buttonId)));
  }

  module.exports = {
    getFieldById: getFieldById,
    getFieldByModel: getFieldByModel,
    getButtonById: getButtonById
  };
})();