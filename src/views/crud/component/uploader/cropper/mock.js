import mockUtil from "/src/mock/base";
const options = {
  name: "CropperUploader",
  idGenerator: 0
};
const list = [
  {
    avatar_error1: "http://greper.handsfree.work/extends/avatar1.jpg",
    avatar_error2: "http://greper.handsfree.work/extends/avatar1.jpg",
    avatar: "http://greper.handsfree.work/extends/avatar.jpg",
    file: ["http://greper.handsfree.work/extends/avatar.jpg", "https://www.baidu.com/img/bd_logo1.png"],
    image: ["http://greper.handsfree.work/extends/avatar.jpg", "https://www.baidu.com/img/bd_logo1.png"],
    image2: ["http://greper.handsfree.work/extends/avatar.jpg", "https://www.baidu.com/img/bd_logo1.png"]
  },
  {
    radio: "2"
  },
  {
    radio: "0"
  }
];
options.list = list;
const mock = mockUtil.buildMock(options);
export default mock;
