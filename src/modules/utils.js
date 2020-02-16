/**
 * 쿼리스트링 생성
 * @param {object} params
 */
export const queryString = (params) => {
  return Object.keys(params)
    .map((key) => key + '=' + params[key])
    .join('&');
};

/**
 * 스토리지 저장
 * @param {string} key
 * @param {object} value
 */
export const setStorage = (key, value) => {
  //console.log('setStorage', arguments);

  if (typeof value === 'object') {
    value = JSON.stringify(value);
  }

  localStorage[key] = value;
};

/**
 * 스토리지 조회
 * @param {string} key
 */
export const getStorage = (key) => {
  //console.log('getStorage', arguments);

  var value = localStorage[key];
  if (!value) {
    console.info('localStorage에 없습니다.');
    return false;
  }

  // boolean과 json 형식의 string만 파싱함.
  try {
    if (typeof value === 'string' && (value.slice(0, 1).match(/{/) || value.match(/true|false/))) {
      value = JSON.parse(value);
    }
  } catch (error) {
    console.error('error getStorage', error);
  }

  return value;
};

/**
 * 스토리지 삭제
 * @param {string} key
 */
export const deleteStorage = function(key) {
  //console.log('deleteStorage', arguments);

  localStorage.removeItem(key);
};

export default {
  queryString,
  setStorage,
  getStorage,
  deleteStorage,
};
