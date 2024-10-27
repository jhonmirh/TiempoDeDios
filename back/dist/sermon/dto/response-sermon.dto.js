"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseSermonDto = void 0;
class ResponseSermonDto {
    constructor(sermon) {
        this.id = sermon.id;
        this.date = sermon.date;
        this.description = sermon.description;
        this.text = sermon.text;
        this.citationText = sermon.citationText;
        this.pastorId = sermon.pastor.id;
    }
}
exports.ResponseSermonDto = ResponseSermonDto;
//# sourceMappingURL=response-sermon.dto.js.map