let boardInputDatas = {
    id: 0,
    title: "",
    content: "",
    writer: "",
};

function setInputsEvent() {
    const titleInput = document.querySelector(".wirte-title");
    const contentInput = document.querySelector(".write-content");
    const writerInput = document.querySelector(".write-writer");
    
    titleInput.onkeyup = handleBoardInputOnChange;
    contentInput.onkeyup = handleBoardInputOnChange;
    writerInput.onkeyup = handleBoardInputOnChange;
}

// 밑에껄로 하다가 강사님꺼 추가
function setButtonEvent() {
    const submitButton = document.querySelector(".write-submit-button");
    submitButton.onclick = handleSubmitOnClick;
}

// 밑에껄로 하다가 강사님꺼 추가
function handleSubmitOnClick() {
    saveBoard();
    clear();
}

function saveBoard() {
    let boardDatas = !!localStorage.getItem("boardDatas") 
    ? JSON.parse(localStorage.getItem("boardDatas"))
    : []; // null이면 빈 배열로 만들어줌

    if(boardDatas.length > 0) {
        boardInputDatas.id = boardDatas[boardDatas.length - 1].id + 1;
    }

    boardDatas = [ // 빈 배열이라도 여기서 추가가 됨
        ...boardDatas,
        boardInputDatas,
    ]

    localStorage.setItem("boardDatas", JSON.stringify(boardDatas));
    alert("게시글 작성 완료");
    location.href = "./list.html";
}

function clear() {
    const titleInput = document.querySelector(".wirte-title");
    const contentInput = document.querySelector(".write-content");
    const writerInput = document.querySelector(".write-writer");
    const inputs = [titleInput, contentInput, writerInput];
    // 공백으로 초기화
    inputs.forEach(input => input.value = "");
    boardInputDatas = {
        title: "",
        content: "",
        writer: "",
    };
} 

function handleBoardInputOnChange(e) {
    boardInputDatas = { /*입력할 때 마다 객체에 값이 들어감 - 값을 뒤덮으니까*/
        ...boardInputDatas,
        [e.target.name]:e.target.value,
    }
}
setInputsEvent();
setButtonEvent();