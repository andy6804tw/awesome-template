/**
 * 提交按鈕事件觸發
 */
function getResult() {
  // 取得多選區塊內容
  let question1List = [];
  const checkboxes = document.querySelectorAll(
    'input[name="question1Checkbox"]:checked'
  );
  for (var i = 0; i < checkboxes.length; i++) {
    question1List.push(checkboxes[i].value);
  }
  // 取得單選區塊內容
  const question2Value = document.querySelector(
    'input[name="question2Checkbox"]:checked'
  ).value;

  alert(`Multiple Select: ${question1List}\n Single Option: ${question2Value}`);
}

/**
 * 為所有 input 按鈕添加點擊事件(偵測是否有點選)
 */
const inputButtons = document.querySelectorAll('input');
Array.from(inputButtons).forEach((button, index) => {
  button.addEventListener('click', () => {
    // 取得多選區塊被選擇的DOM
    const checkboxes = document.querySelectorAll('input[name="question1Checkbox"]:checked');
    // 取得單選區塊被選擇的DOM
    const radioboxes = document.querySelectorAll('input[name="question2Checkbox"]:checked');
    // 透過計數檢查兩嵙區塊是否都有選擇按鈕
    if (checkboxes.length & radioboxes.length) {
      document.getElementById('btnSubmit').classList.remove('disabled');
    }
  });
});

/**
 * 清空選擇內容
 */
function resetEvent(){
  document.getElementById('btnSubmit').classList.add('disabled');
}