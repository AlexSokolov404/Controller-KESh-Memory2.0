const btn_left = document.querySelector(".left");
const btn_right = document.querySelector(".right");
const view1 = document.querySelector(".view1");
const view2 = document.querySelector(".view2");
const view3 = document.querySelector(".view3");
const kesh_img = document.querySelector(".schema");
const wrap = document.getElementById("wrapper");
const wrap2 = document.getElementById("wrapper2");
const kesh_memory_L1_data = document.querySelector(".kesh_memory_L1_data");
const kesh_memory_L2 = document.querySelector(".kesh_memory_L2");
const kesh_memory_L3 = document.querySelector(".kesh_memory_L3");
const ozu_span = document.querySelector(".ozu span");
const rec = document.querySelectorAll(".rec");

const arrow1line = document.querySelector(
  ".controller_kesh_memory > span:nth-child(2) line"
);
const arrow1polyline = document.querySelector(
  ".controller_kesh_memory > span:nth-child(2) polyline"
);

const arrow2line = document.querySelector(
  ".controller_kesh_memory > span:nth-child(3) line"
);
const arrow2polyline = document.querySelector(
  ".controller_kesh_memory > span:nth-child(3) polyline"
);

const arrow3line = document.querySelector(
  ".controller_kesh_memory > span:nth-child(4) line"
);
const arrow3polyline = document.querySelector(
  ".controller_kesh_memory > span:nth-child(4) polyline"
);

const arrow4line = document.querySelector(
  ".controller_kesh_memory > span:nth-child(5) line"
);
const arrow4polyline = document.querySelector(
  ".controller_kesh_memory > span:nth-child(5) polyline"
);

const arrow5line = document.querySelector(
  ".kesh_memory_L1_data > span:nth-child(2) line"
);
const arrow5polyline = document.querySelector(
  ".kesh_memory_L1_data > span:nth-child(2) polyline"
);

const arrow6line = document.querySelector(
  ".kesh_memory_L1_data > span:nth-child(3) line"
);
const arrow6polyline = document.querySelector(
  ".kesh_memory_L1_data > span:nth-child(3) polyline"
);

const arrow7line = document.querySelector(
  ".kesh_memory_L2 span:nth-child(2) line"
);
const arrow7polyline = document.querySelector(
  ".kesh_memory_L2 span:nth-child(2) polyline"
);

const arrow8line = document.querySelector(
  ".kesh_memory_L2 span:nth-child(3) line"
);
const arrow8polyline = document.querySelector(
  ".kesh_memory_L2 span:nth-child(3) polyline"
);

const arrow9line = document.querySelector(
  ".kesh_memory_L3 span:nth-child(2) line"
);
const arrow9polyline = document.querySelector(
  ".kesh_memory_L3 span:nth-child(2) polyline"
);

const arrow10line = document.querySelector(
  ".kesh_memory_L3 span:nth-child(3) line"
);
const arrow10polyline = document.querySelector(
  ".kesh_memory_L3 span:nth-child(3) polyline"
);

// const arrow11line = document.querySelector(".ckm span:nth-child(2) line");
// const arrow11polyline = document.querySelector(
//   ".ckm span:nth-child(2) polyline"
// );

const arrow12line = document.querySelector(".ckm span:nth-child(3) line");
const arrow12polyline = document.querySelector(
  ".ckm span:nth-child(3) polyline"
);

// const arrow13line = document.querySelector(".kml1 span:nth-child(2) line");
// const arrow13polyline = document.querySelector(
//   ".kml1 span:nth-child(2) polyline"
// );

const arrow14line = document.querySelector(".kml1 span:nth-child(3) line");
const arrow14polyline = document.querySelector(
  ".kml1 span:nth-child(3) polyline"
);

const arrow15line = document.querySelector(".kml2 span:nth-child(2) line");
const arrow15polyline = document.querySelector(
  ".kml2 span:nth-child(2) polyline"
);

const arrow16line = document.querySelector(".kml2 span:nth-child(3) line");
const arrow16polyline = document.querySelector(
  ".kml2 span:nth-child(3) polyline"
);

// arrow16line.style.stroke = "#2E8B57";

let count = 0;
let middle;
let middle2 = [];
let middle3;

btn_left.addEventListener("click", leftSlaid);
btn_right.addEventListener("click", rightSlaid);

let imgElem = document.createElement("img");
let imgElem2 = document.createElement("img");
imgElem.src = "./src/img/Slide_two.drawio.svg";
imgElem2.src = "./src/img/Slide_two_2.drawio.svg";
imgElem.alt = "Схема";
imgElem2.alt = "Схема";

let textElem = document.createElement("p");

document.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "ArrowLeft":
      leftSlaid();
      break;

    case "ArrowRight":
      rightSlaid();
      break;

    default:
      break;
  }
});

function leftSlaid() {
  count--;
  if (count < 0) {
    count = 0;
    console.error("Это и так первый слайд!!!");
  }
  switch (count) {
    case 0:
      view1.style.transform = "rotate(0deg)";
      break;

    case 1:
      imgElem2.remove();
      kesh_img.append(imgElem);
      break;

    case 2:
      view2.style.transform = "rotate(0deg)";
      break;

    case 3:
      view3.style.transform = "rotate(0deg)";
      break;

    case 4:
      textElem.innerHTML =
        "<b>Контроллер кэш-памяти </b>- это устроство, управляющее содержанием кэша, получением необходимой информации из кэша или оперативной памяти и передачей её ядру процессора, а также возвращением в кэш и оперативную память результатов вычислений.";
      stopBlinkArrow(middle, arrow1line, arrow1polyline);
      break;

    case 5:
      textElem.innerHTML =
        "<b>1. Процессор</b>, выполняя команду, запрашивает код операции или операнд по некоторому адресу в адресном пространстве.";
      break;

    case 6:
      textElem.innerHTML =
        "<b>2. Кэш-контроллер</b> проверяет, есть ли в кэш-памяти строка данных, соответствующая запрашиваемому адресу. Сначала обращение к идёт к первому уровню кэш-памяти L1. В случае наличия такой строки, ситуация называется <b>Кэш-попадание</b>.";
      break;

    case 7:
      textElem.innerHTML =
        "<b>3. Если строки</b> в кэш-памяти L1 нет, происходит кэш-промах, и кэш-контроллер инициирует обращение к кэш-памяти L2. Если в кэш-памяти L2 есть необходимая информация, то она передаётся процессору.";
      break;

    case 8:
      textElem.innerHTML =
        "<b>4. </b>В случае <b>кэш-промаха</b> в L2 поиск продолжается на третьем уровне кэш-памяти L3.";
      break;

    case 9:
      textElem.innerHTML =
        "<b>5. </b>Если строки в <b>кэш-памяти нет,</b> то кэш-контроллер инициирует обращение к основной памяти ОП для переписи из нее нужной строки в кэш-память.";
      wrap.style.transform = "rotate(0deg)";
      break;
    case 10:
      textElem.innerHTML =
        "Если строки в кэш-памяти нет, возникает проблема замены какой-либо строки в кэше на новую строку из ОП. Для этого используют специальные дисциплины замещения строк. Эти функции выполняет кэш-контроллер. Рассмотрим, каким образом происходит запись данных из оперативной памяти (ОП) в такой кэш.";
      break;

    case 11:
      textElem.innerHTML =
        "<b>6. </b>При полностью заполненном кэше L2 процессор пытается загрузить еще одну кэш - строку данными из ОП.";
      break;
    case 12:
      textElem.innerHTML =
        "<b>7. </b>Обнаружив, что все кэш-строки заняты, кэш L2 избавляется от наименее ценной из них, стремясь при этом найти линейку, которая еще не была модифицирована, поскольку в противном случае ее еще придется выгружать в оперативную память.";
      break;
    case 13:
      textElem.innerHTML = "<b>8. </b> Строка из ОП заносится в кэш L2.";
      break;

    case 14:
      textElem.innerHTML =
        "<b>9. </b> Затем кэш L2 передает кэшу L1 полученные из памяти данные. Если кэш первого уровня также заполнен, ему приходится избавляться от одной из кэш - строк по сценарию, описанному выше.</br> Таким образом, загруженная порция данных присутствует и в кэше L1, и в кэше L2.";
      break;

    default:
      break;
  }
}

function rightSlaid() {
  count++;
  if (count > 15) {
    count = 15;
    console.error("Это и так последний слайд!!!");
  }
  switch (count) {
    case 1:
      kesh_img.append(imgElem);
      view1.style.transform = "rotate(-90deg)";
      break;
    case 2:
      imgElem.remove();
      kesh_img.append(imgElem2);
      break;
    case 3:
      view2.style.transform = "rotate(-90deg)";
      break;

    case 4:
      textElem.innerHTML =
        "<b>Контроллер кэш-памяти </b>- это устроство, управляющее содержанием кэша, получением необходимой информации из кэша или оперативной памяти и передачей её ядру процессора, а также возвращением в кэш и оперативную память результатов вычислений.";
      wrap.append(textElem);
      view3.style.transform = "rotate(-90deg)";
      break;

    case 5:
      textElem.innerHTML =
        "<b>1. Процессор</b>, выполняя команду, запрашивает код операции или операнд по некоторому адресу в адресном пространстве.";
      middle = blinkArrow(arrow1line, arrow1polyline);
      break;

    case 6:
      textElem.innerHTML =
        "<b>2. Кэш-контроллер</b> проверяет, есть ли в кэш-памяти строка данных, соответствующая запрашиваемому адресу. Сначала обращение к идёт к первому уровню кэш-памяти L1. В случае наличия такой строки, ситуация называется <b>Кэш-попадание</b>.";
      stopBlinkArrow(middle, arrow1line, arrow1polyline);
      middle = blinkArrow(arrow6line, arrow6polyline);
      setTimeout(
        () => (kesh_memory_L1_data.style.backgroundColor = "green"),
        700
      );
      setTimeout(() => {
        stopBlinkArrow(middle, arrow6line, arrow6polyline);
        middle = blinkArrow(arrow5line, arrow5polyline);
        kesh_memory_L1_data.style.backgroundColor = "rgb(236, 255, 150)";
        setTimeout(() => {
          stopBlinkArrow(middle, arrow5line, arrow5polyline);
          middle = blinkArrow(arrow2line, arrow2polyline);
          setTimeout(() => {
            stopBlinkArrow(middle, arrow2line, arrow2polyline);
          }, 2800);
        }, 2800);
      }, 2800);
      break;

    case 7:
      textElem.innerHTML =
        "<b>3. Если строки</b> в кэш-памяти L1 нет, происходит кэш-промах, и кэш-контроллер инициирует обращение к кэш-памяти L2. Если в кэш-памяти L2 есть необходимая информация, то она передаётся процессору.";
      middle = blinkArrow(arrow6line, arrow6polyline);
      setTimeout(
        () => (kesh_memory_L1_data.style.backgroundColor = "red"),
        700
      );
      setTimeout(() => {
        stopBlinkArrow(middle, arrow6line, arrow6polyline);
        middle = blinkArrow(arrow5line, arrow5polyline, "red");
        kesh_memory_L1_data.style.backgroundColor = "rgb(236, 255, 150)";
        setTimeout(() => {
          stopBlinkArrow(middle, arrow5line, arrow5polyline);
          middle = blinkArrow(arrow8line, arrow8polyline);
          setTimeout(
            () => (kesh_memory_L2.style.backgroundColor = "green"),
            700
          );
          setTimeout(() => {
            stopBlinkArrow(middle, arrow8line, arrow8polyline);
            middle = blinkArrow(arrow7line, arrow7polyline);
            kesh_memory_L2.style.backgroundColor = "rgba(255, 173, 50, 0.561)";
            setTimeout(() => {
              stopBlinkArrow(middle, arrow7line, arrow7polyline);
              middle = blinkArrow(arrow2line, arrow2polyline);
              setTimeout(() => {
                stopBlinkArrow(middle, arrow2line, arrow2polyline);
              }, 2800);
            }, 2800);
          }, 2800);
        }, 2800);
      }, 2800);
      break;

    case 8:
      textElem.innerHTML =
        "<b>4. </b>В случае <b>кэш-промаха</b> в L2 поиск продолжается на третьем уровне кэш-памяти L3.";
      middle = blinkArrow(arrow6line, arrow6polyline);
      setTimeout(
        () => (kesh_memory_L1_data.style.backgroundColor = "red"),
        700
      );
      setTimeout(() => {
        stopBlinkArrow(middle, arrow6line, arrow6polyline);
        middle = blinkArrow(arrow5line, arrow5polyline, "red");
        kesh_memory_L1_data.style.backgroundColor = "rgb(236, 255, 150)";
        setTimeout(() => {
          stopBlinkArrow(middle, arrow5line, arrow5polyline);
          middle = blinkArrow(arrow8line, arrow8polyline);
          setTimeout(() => {
            kesh_memory_L2.style.backgroundColor = "red";
          }, 700) /*"rgba(255, 173, 50, 0.561)"*/;
          setTimeout(() => {
            kesh_memory_L2.style.backgroundColor = "rgba(255, 173, 50, 0.561)";
            stopBlinkArrow(middle, arrow8line, arrow8polyline);
            middle = blinkArrow(arrow7line, arrow7polyline, "red");
            setTimeout(() => {
              kesh_memory_L2.style.backgroundColor =
                "rgba(255, 173, 50, 0.561)";
              stopBlinkArrow(middle, arrow7line, arrow7polyline);
              middle = blinkArrow(arrow10line, arrow10polyline);
              setTimeout(() => {
                kesh_memory_L3.style.backgroundColor = "green";
              }, 700);
              setTimeout(() => {
                kesh_memory_L3.style.backgroundColor = "rgb(255, 230, 0)";
                stopBlinkArrow(middle, arrow10line, arrow10polyline);
                middle = blinkArrow(arrow9line, arrow9polyline);
                setTimeout(() => {
                  stopBlinkArrow(middle, arrow9line, arrow9polyline);
                  middle = blinkArrow(arrow2line, arrow2polyline);
                  setTimeout(() => {
                    stopBlinkArrow(middle, arrow2line, arrow2polyline);
                  }, 2800);
                }, 2800);
              }, 2800);
            }, 2800);
          }, 2800);
        }, 2800);
      }, 2800);
      break;

    case 9:
      textElem.innerHTML =
        "<b>5. </b>Если строки в <b>кэш-памяти нет,</b> то кэш-контроллер инициирует обращение к основной памяти ОП для переписи из нее нужной строки в кэш-память.";
      middle = blinkArrow(arrow6line, arrow6polyline);
      setTimeout(
        () => (kesh_memory_L1_data.style.backgroundColor = "red"),
        700
      );
      setTimeout(() => {
        stopBlinkArrow(middle, arrow6line, arrow6polyline);
        middle = blinkArrow(arrow5line, arrow5polyline, "red");
        kesh_memory_L1_data.style.backgroundColor = "rgb(236, 255, 150)";
        setTimeout(() => {
          stopBlinkArrow(middle, arrow5line, arrow5polyline);
          middle = blinkArrow(arrow8line, arrow8polyline);
          setTimeout(() => {
            kesh_memory_L2.style.backgroundColor = "red";
          }, 700) /*"rgba(255, 173, 50, 0.561)"*/;
          setTimeout(() => {
            kesh_memory_L2.style.backgroundColor = "rgba(255, 173, 50, 0.561)";
            stopBlinkArrow(middle, arrow8line, arrow8polyline);
            middle = blinkArrow(arrow7line, arrow7polyline, "red");
            setTimeout(() => {
              kesh_memory_L2.style.backgroundColor =
                "rgba(255, 173, 50, 0.561)";
              stopBlinkArrow(middle, arrow7line, arrow7polyline);
              middle = blinkArrow(arrow10line, arrow10polyline);
              setTimeout(() => {
                kesh_memory_L3.style.backgroundColor = "red";
              }, 700);
              setTimeout(() => {
                kesh_memory_L3.style.backgroundColor = "rgb(255, 230, 0)";
                stopBlinkArrow(middle, arrow10line, arrow10polyline);
                middle = blinkArrow(arrow9line, arrow9polyline, "red");
                setTimeout(() => {
                  stopBlinkArrow(middle, arrow9line, arrow9polyline);
                  middle = blinkArrow(arrow3line, arrow3polyline);
                  setTimeout(() => {
                    ozu_span.style.backgroundColor = "green";
                  }, 700);
                  setTimeout(() => {
                    ozu_span.style.backgroundColor = "yellow";
                    stopBlinkArrow(middle, arrow3line, arrow3polyline);
                    middle = blinkArrow(arrow4line, arrow4polyline);
                    setTimeout(() => {
                      stopBlinkArrow(middle, arrow4line, arrow4polyline);
                      middle = blinkArrow(arrow2line, arrow2polyline);
                      setTimeout(() => {
                        stopBlinkArrow(middle, arrow2line, arrow2polyline);
                      }, 2800);
                    }, 2800);
                  }, 2800);
                }, 2800);
              }, 2800);
            }, 2800);
          }, 2800);
        }, 2800);
      }, 2800);
      break;

    case 10:
      wrap2.append(textElem);
      wrap.style.transform = "rotate(-90deg)";
      textElem.innerHTML =
        "Если строки в кэш-памяти нет, возникает проблема замены какой-либо строки в кэше на новую строку из ОП. Для этого используют специальные дисциплины замещения строк. Эти функции выполняет кэш-контроллер. Рассмотрим, каким образом происходит запись данных из оперативной памяти (ОП) в такой кэш.";
      break;

    case 11:
      textElem.innerHTML =
        "<b>6. </b>При полностью заполненном кэше L2 процессор пытается загрузить еще одну кэш - строку данными из ОП.";
      middle2.push(blinkRec(2));
      break;

    case 12:
      textElem.innerHTML =
        "<b>7. </b>Обнаружив, что все кэш-строки заняты, кэш L2 избавляется от наименее ценной из них, стремясь при этом найти линейку, которая еще не была модифицирована, поскольку в противном случае ее еще придется выгружать в оперативную память.";
      middle2.push(blinkRec(1, "red"));
      break;

    case 13:
      textElem.innerHTML = "<b>8. </b> Строка из ОП заносится в кэш L2.";
      middle3 = blinkArrow(arrow12line, arrow12polyline);
      setTimeout(() => {
        stopBlinkArrow(middle3, arrow12line, arrow12polyline);
        middle3 = blinkArrow(arrow16line, arrow16polyline);
        stopBlinkRec(middle2[1], 1);
        middle2.pop();
        setTimeout(() => {
          middle2.push(blinkRec(1));
          stopBlinkArrow(middle3, arrow16line, arrow16polyline);
        }, 2800);
      }, 2800);
      break;

    case 14:
      textElem.innerHTML =
        "<b>9. </b> Затем кэш L2 передает кэшу L1 полученные из памяти данные. Если кэш первого уровня также заполнен, ему приходится избавляться от одной из кэш - строк по сценарию, описанному выше.</br> Таким образом, загруженная порция данных присутствует и в кэше L1, и в кэше L2.";
      middle3 = blinkArrow(arrow15line, arrow15polyline);
      setTimeout(() => {
        stopBlinkArrow(middle3, arrow15line, arrow15polyline);
        middle3 = blinkArrow(arrow14line, arrow14polyline);
        setTimeout(() => {
          stopBlinkArrow(middle3, arrow14line, arrow14polyline);
          middle2.push(blinkRec(0));
          stopBlinkRec(middle2[1], 1);
        }, 2800);
      }, 2800);
      break;

    case 15:
      textElem.innerHTML =
        "<b>РЕЖИМ ЗАПИСИ</b></br>В режиме записи информация помещается в первую свободную ячейку памяти, начиная с уровня L1. При отсутствии свободных ячеек используются специальные дисциплины замещения строк, рассмотренные выше.";
      stopBlinkRec(middle2[0], 2);
      stopBlinkRec(middle2[2], 0);
      break;

    default:
      break;
  }
}

function blinkArrow(arrow, linearrow, color = "rgb(50, 205, 50)") {
  let timerBlink = setInterval(() => {
    arrow.style.stroke === color
      ? (arrow.style.stroke = "black")
      : (arrow.style.stroke = color);
    linearrow.style.stroke === color
      ? (linearrow.style.stroke = "black")
      : (linearrow.style.stroke = color);
  }, 700);
  return timerBlink;
}

function blinkRec(id, color = "green") {
  rec[id].style.backgroundColor = color;
  let timerBlink = setInterval(() => {
    rec[id].style.visibility === "hidden"
      ? (rec[id].style.visibility = "visible")
      : (rec[id].style.visibility = "hidden");
  }, 500);
  return timerBlink;
}

function stopBlinkRec(stop_elem, id) {
  clearInterval(stop_elem);
  rec[id].style.visibility = "hidden";
}

function stopBlinkArrow(stop_elem, arrow, linearrow) {
  clearInterval(stop_elem);
  arrow.style.stroke = "black";
  linearrow.style.stroke = "black";
}
