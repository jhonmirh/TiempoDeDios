"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponsePastorDto = void 0;
class ResponsePastorDto {
    constructor(pastor) {
        this.id = pastor.id;
        this.name = pastor.name;
        this.email = pastor.email;
        this.phone = pastor.phone;
        this.address = pastor.address;
        this.city = pastor.city;
        this.country = pastor.country;
        this.age = pastor.age;
        this.nid = pastor.nid;
        this.account = pastor.account;
        this.bank = pastor.bank;
        this.federation = pastor.federation;
        this.devotionals = pastor.devotionals || [];
        this.sermons = pastor.sermons || [];
    }
}
exports.ResponsePastorDto = ResponsePastorDto;
//# sourceMappingURL=response-pastor.dto.js.map