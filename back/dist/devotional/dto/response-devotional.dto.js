"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseDevotionalDto = void 0;
class ResponseDevotionalDto {
    constructor(devotional) {
        this.id = devotional.id;
        this.date = devotional.date;
        this.description = devotional.description;
        this.text = devotional.text;
        this.citationText = devotional.citationText;
        this.pastor = {
            id: devotional.pastor.id,
            name: devotional.pastor.name,
            email: devotional.pastor.email,
            phone: devotional.pastor.phone,
        };
    }
}
exports.ResponseDevotionalDto = ResponseDevotionalDto;
//# sourceMappingURL=response-devotional.dto.js.map