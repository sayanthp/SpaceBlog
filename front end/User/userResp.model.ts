export class UserResp {
    constructor(
      
        public firstName:String,
        public lastName:String ,
        public email:String ,
        public password:String,
        public cnfrmPassword: String
      )
      { }
}