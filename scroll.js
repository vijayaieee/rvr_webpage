var img=["https://www.collegebatch.com/static/clg-gallery/rvr-jc-college-of-engineering-guntur-248635.jpg","https://www.collegebatch.com/static/clg-gallery/rvr-jc-college-of-engineering-guntur-248636.jpg","https://lh3.googleusercontent.com/p/AF1QipNVTcy_TMmkN6Nk8FZ_NE6i47quBb_ecBOdp3F8=s1360-w1360-h1020","https://www.admissionfever.com/Media/clgimg/gallery/3566_img7567908290757474.jpg","https://rvrjcce.ac.in/sports/images/1.JPG"];
var imgNumber = 0;
let knowMoreClick = document.getElementById("know-more-click");
function startAutoScroll(){
    scrollInterval = setInterval(scrollRight,2000);
}
function scrollBack() {
    if(imgNumber)
        imgNumber--;
    document.getElementById('rvrjc').src=img[imgNumber];
}

function scrollRight() {
    if(imgNumber!=img.length-1)
      imgNumber++;
    else
      imgNumber = 0;
    document.getElementById('rvrjc').src=img[imgNumber];
}
knowMoreClick.onclick = function() {
    document.getElementById('know-more').innerHTML = '<p class="sub-content"><br><span style="color:#28B463;font-size: 20px;"><b>Accreditation & affiliation:</b></span><br>R.V.R. & J.C College strives continuously to meet the standards of AICTE, UGC, APSCHE, NIRF and ISO. So far, the College was accredited five times by the National Board of Accreditation (NBA) of AICTE. The college was initially accreditation in the year 1998. During the renewal of the accreditation in the year 2002, all the seven departments of the college successfully got accredited from NBA. Subsequently during the next phase of renewal in 2007, all the seven departments of the college successfully accredited from NBA. In 2012, all the eligible UG Programmes are accredited. The college applied for renewal of NBA in 2016 and CSE, IT, ECE, EEE & ME UG courses are accredited in the year 2017.</p><p class="sub-content">The institute applied for accreditation by NAAC in the year 2012 and got "A" grade in 2014. The institute applied for renewal of accreditation by NAAC in 2019 and got NACC "A+" grade in 2021.</p><p class="sub-content"><br><span style="color:#28B463;font-size: 20px;"><b>Vision:</b></span><br>To develop integrated manpower with right attitude, possessing knowledge and skills, required to make an honourable living and contribute to the socioeconomic development and welfare of the society.<br><br><span style="color:#28B463;font-size: 20px;"><b>Mission:</b></span><br><ul class="sub-content" style="list-style-type: circle;"><li>To produce globally agile graduates with value orientation, professional competency, critical and creative thinking and lifelong learning.</li><li>To enrich the society through education and research by generating proficient manpower, capable of contributing to the needs of the industry.</li><li>To provide conducive learning environment, encompassing knowledge, communication and soft skills that enables the students to transform themselves into global leaders.</li></ul><br><p class="sub-content">Looking back through the 36 years of journey, there were moments of pride, the notable among them was Accreditation by NBA in 1998, 2002, 2007, 2012 and 2017; a high rating in Academic Audit & Grading conducted by A.P. State Council of Higher Education and a place among the Top- Engineering Colleges in national and state surveys and a consistent top position in university examination results. The institute is under NIRF rank band 201 - 250(for 2020) and ISO 9001:2015 certification from 2019. &nbsp;<span id="know-less-click" onclick="knowLessClick()">less...</span></p></p>'
    knowMoreClick.style.visibility = 'hidden';
}
function knowLessClick(){
    console.log("hi");
    document.getElementById('know-more').innerHTML = '';
    knowMoreClick.style.visibility = 'visible';
}
window.onload = startAutoScroll;
// Add an event listener to all anchor tags with href starting with '#'

  
