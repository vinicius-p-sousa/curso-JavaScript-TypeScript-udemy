'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
var _sequelize = require('sequelize');
var _sequelize2 = _interopRequireDefault(_sequelize);
var _appConfig = require('../config/appConfig');
var _appConfig2 = _interopRequireDefault(_appConfig);

class Picture extends _sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        original_name: {
          type: _sequelize2.default.STRING,
          defaultValue: '',
          validate: {
            notEmpty: {
              msg: 'campo não pode ser vazio',
            },
          },
        },
        file_name: {
          type: _sequelize2.default.STRING,
          defaultValue: '',
          validate: {
            notEmpty: {
              msg: 'campo não pode ser vazio',
            },
          },
        },
        url: {
          type: _sequelize2.default.VIRTUAL,
          get() {
            return `${_appConfig2.default.url}/images/${this.getDataValue(
              'file_name'
            )}`;
          },
        },
      },
      {
        sequelize,
        tableName: 'pictures',
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Aluno, { foreignKey: 'aluno_id' });
  }
}
exports.default = Picture;
