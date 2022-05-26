/**
 * 總共有五個步驟(包含提交)，因此中間會有 4 個過程。每增加一個步驟 progress 增加 25。
 * 100/(5-1)=25 => 100/(stepButtons.length - 1) => step
 */

/**
 * 手動點擊 stepButtons 並跳選到指定步驟
 */
const stepButtons = document.querySelectorAll('.step-button');
const itemList = document.getElementsByClassName('step-item');
const progressBar = document.getElementById('progressBar');
const step = 100 / (stepButtons.length - 1); // next() 和 previous() 會用到
Array.from(stepButtons).forEach((button, index) => {
  button.addEventListener('click', () => {
    // index 取得當前步驟索引，並修改 progress-bar 數值
    progressBar.style.width = `${(index * 100) / (stepButtons.length - 1)}%`;
    // 迴圈修改每個 step-item 各自當前狀態
    stepButtons.forEach((item, secindex) => {
      // 處理完成的 step-item
      if (index > secindex) {
        itemList[secindex].classList.add('done');
        itemList[secindex].classList.remove('inprogress');
      }
      // 尚未進行到的 step-item
      if (index <= secindex) {
        itemList[secindex].classList.remove('inprogress');
        itemList[secindex].classList.remove('done');
      }
      // 正在當前步驟的 step-item
      if (index === secindex) {
        itemList[secindex].classList.add('inprogress');
      }
    });
    // 判斷是否第一步，若是則隱藏上一步按鈕
    if (index == 0) {
      document.getElementById('btnPreviois').classList.add('disabled');
    } else {
      document.getElementById('btnPreviois').classList.remove('disabled');
    }
    // 判斷是否最後步驟，若是則隱藏下一步按鈕，顯示提交按鈕
    if (index == 4) {
      document.getElementById('btnNext').classList.add('d-none');
      document.getElementById('btnSubmit').classList.remove('d-none');
    } else {
      document.getElementById('btnNext').classList.remove('d-none');
      document.getElementById('btnSubmit').classList.add('d-none');
    }
  });
});

/**
 * 點選下一步觸發事件
 */
function next() {
  const progressBar = document.getElementById('progressBar');
  const progressValue = parseFloat(progressBar.style.width.replace('%', ''));
  const stepIndex = progressValue / step; // 取得當前步驟索引 0~n

  const itemList = document.getElementsByClassName('step-item');
  itemList[stepIndex].classList.remove('inprogress');
  itemList[stepIndex].classList.add('done');
  itemList[stepIndex + 1].classList.add('inprogress');
  progressBar.style.width = `${progressValue + step}%`; // 修改進度條數值
  // 若當前並非第一步驟，則顯示上一步按鈕
  if (stepIndex != -1)
    document.getElementById('btnPreviois').classList.remove('disabled');
  // 判斷是否最後步驟，若是則隱藏下一步按鈕，顯示提交按鈕
  if (stepIndex == 3) {
    document.getElementById('btnNext').classList.add('d-none');
    document.getElementById('btnSubmit').classList.remove('d-none');
  }
}

/**
 * 點選上一步觸發事件
 */
function previous() {
  const progressBar = document.getElementById('progressBar');
  const progressValue = parseFloat(progressBar.style.width.replace('%', ''));
  const stepIndex = progressValue / step; // 取得當前步驟索引 0~n

  const itemList = document.getElementsByClassName('step-item');
  itemList[stepIndex - 1].classList.remove('done');
  itemList[stepIndex - 1].classList.add('inprogress');
  itemList[stepIndex].classList.remove('inprogress');
  progressBar.style.width = `${progressValue - step}%`; // 修改進度條數值

  // 若是在第一步，則將上一部按鈕隱藏
  if (stepIndex == 1)
    document.getElementById('btnPreviois').classList.add('disabled');
  // 若從提交步驟退回上一步，則會隱藏提交按鈕，並出現下一步按鈕
  if (stepIndex == 4) {
    document.getElementById('btnNext').classList.remove('d-none');
    document.getElementById('btnSubmit').classList.add('d-none');
  }
}
