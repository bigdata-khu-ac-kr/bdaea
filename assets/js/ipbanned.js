
(function () {


    function getIP(json) {

        document.write(json.ip); //json.ip�� �� ������ �ּ� �˾Ƴ���

    }

    


             function resp() {
              //   var banIP1 = ['58.142.78.51'];  // ������ ������ �Է�
                 var json = JSON.parse(this.responseText);

                 
                 if (json.ip == '00.142.78.51' |
                     json.ip == '588.142.78.51' |
                     json.ip == '00.123.45.67') {
 
                     // ������ ������ ���� �� ������ �޽���(Ư�� �ּҷθ� �������� �Ʒ� �� ����)
                     alert("����� ������ ���ܵǾ����ϴ�.")
                     // �ٸ� ������ ���� URL�ּ� �Է�
                     window.location.replace("http://green.bu.to");
 
                 }
                 


             }

             var request = new XMLHttpRequest();
             request.addEventListener("load", resp);
             request.open("GET", 'https://api.ipify.org?format=json');
             request.send();

}());