"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePastorDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_pastor_dto_1 = require("./create-pastor.dto");
class UpdatePastorDto extends (0, mapped_types_1.PartialType)(create_pastor_dto_1.CreatePastorDto) {
}
exports.UpdatePastorDto = UpdatePastorDto;
//# sourceMappingURL=update-pastor.dto.js.map