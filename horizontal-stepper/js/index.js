/**
 * 總共有五個步驟(包含提交)，因此中間會有 4 個過程。每增加一個步驟 progress 增加 25。
 * 100/(5-1)=25
 */
function next(){
    const progressBar=document.getElementById('progressBar');
    const progressValue=parseFloat(progressBar.style.width.replace('%', ''));
    const stepIndex=progressValue/25; // 取得當前步驟索引 0~n

    const itemList=document.getElementsByClassName('step-item');
    itemList[stepIndex].classList.remove('inprogress');
    itemList[stepIndex].classList.add('done');
    itemList[stepIndex+1].classList.add('inprogress');
    progressBar.style.width=`${progressValue+25}%`;

    if(stepIndex!=-1)
        document.getElementById('btnPreviois').classList.remove('disabled');
    if(stepIndex==3){
        document.getElementById('btnNext').classList.add('d-none');
        document.getElementById('btnSubmit').classList.remove('d-none');
    }
}

function previous(){
    const progressBar=document.getElementById('progressBar');
    const progressValue=parseFloat(progressBar.style.width.replace('%', ''));
    const stepIndex=progressValue/25; // 取得當前步驟索引 0~n

    const itemList=document.getElementsByClassName('step-item');
    itemList[stepIndex-1].classList.remove('done');
    itemList[stepIndex-1].classList.add('inprogress');
    itemList[stepIndex].classList.remove('inprogress');
    progressBar.style.width=`${progressValue-25}%`;

    if(stepIndex==1)
        document.getElementById('btnPreviois').classList.add('disabled');
    if(stepIndex==4){
        document.getElementById('btnNext').classList.remove('d-none');
        document.getElementById('btnSubmit').classList.add('d-none');
    }
}