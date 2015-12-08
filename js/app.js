$(function() {
	$("#generate").click(function() {
		$("#output").html(gera_funk());
	});
});

function gera_funk() {
		var trechos = new Array(7);
        trechos[0] = [
                "VmVtIGNvcnJlbmRvLCBtaW5oYSBuZWd1aW5oYQ==",
                "VmVtIGdvc3Rvc2EsIHZlbSBuZW7DqW0=",
                "RWxhIHTDoSBpbmRvIHBybyBwYWdvZGU=",
                "RXUgc8OzIHF1ZXJvIHZlciB2b2PDqg==",
                "TyBuZWd1aW5obyBlIGEgbmVndWluaGEgdsOjbw==",
                "UXVlcm8gdmVyIGEgc3Vpbmd1ZWlyYQ=="
        ];
        trechos[1] = [
                "UmVib2xhciBhdMOpIG8gY2jDo28=",
                "UmVtZXhlciBhIGJ1bmRpbmhh",
                "UXVlYnJhciBuZXNzYSBsZXZhZGE=",
                "UmVtZXhlciBiZW0gZ29zdG9zaW5obw==",
                "QXJyZXBpYXIgbmVzc2EgbGV2YWRh",
                "VGlyYXIgbyBww6kgZG8gY2jDo28="
        ];
        trechos[2] = [
                "Qm90YXIgYSBtw6NvIG5hIGNhYmVjaW5oYQ==",
                "Qm90YXIgbyBkZWRpbmhvIG5hIGJvY2E=",
                "Qm90YXIgYSBtw6NvemluaGEgbm8gY29tcGFzc28=",
                "RGFyIHVtIHB1bGluaG8gcHJhIHRyw6Fz",
                "RGFyIHVtYSByb2RhZGluaGE=",
                "UG9yIGEgbcOjb3ppbmhhIG5hIGNhYmXDp2E="
        ];
        trechos[3] = [
                "RSBlbXBpbmFyIG8gcG9wb3rDo28=",
                "RSBtZXhlciBuZXNzYSBxdWVicmFuw6dh",
                "QXJyZXBpYW5kbyBhIG5lZ2FkYQ==",
                "UGFyYSBtZSBkZWl4YXIgcGlyYWRv",
                "RSBsZXZhbnRhciBvIGFzdHJhbA==",
                "RW5sb3VxdWVjZXIgbyBuZWfDo28="
        ];
        trechos[4] = [
                "QSBtZW5pbmEgcXVhbmRvIGRhbsOnYQ==",
                "QSBuZWd1aW5oYSBxdWFuZG8gcXVlYnJh",
                "QSBidW5kaW5oYSBkYSBuZWd1aW5oYQ==",
                "TyBidW1idW0gZGEgc3Vpbmd1ZWlyYQ==",
                "QSBxdWVicmFkYSBkYSBuZWd1aW5oYQ==",
                "RXNzYSBuZWdhIHF1YW5kbyBxdWVicmE="
        ];
        trechos[5] = [
                "QXJyZXBpYSBhIG11bHRpZMOjbw==",
                "RGVpeGEgZG9pZG8gbyBuZWfDo28=",
                "RmF6IHRyZW1lciBhdMOpIG8gY2jDo28=",
                "RGVpeGEgbyBuZWd1aW5obyBkb2lkw6Nv",
                "w4kgYmVsZXphLCDDqSBlbW/Dp8Ojbw==",
                "RGVpeGEgdG9kbyBtdW5kbyBkb2lkw6Nv"
        ];
        trechos[6] = [
                "UmVtZXhlIGVtIGNpbWEsIHJlbWV4ZSBlbSBiYWl4bw==",
                "UmVib2xhIGRlIHVtIGxhZG8sIHJlYm9sYSBkbyBvdXRybw==",
                "R2luZ2EgZW0gY2ltYSwgZ2luZ2EgZW1iYWl4bw==",
                "UHVsYSwgcHVsYSwgcm9kYSwgcm9kYQ==",
                "TcOjbyBuYSBmcmVudGUsIG3Do28gYXRyw6Fz",
                "Q29tIGEgbcOjb3ppbmhhIG5vIGpvZWxobw=="
        ];
        trechos[7] = [
                "QmVtIGdvc3Rvc28gYXTDqSBvIGNow6Nv",
                "QXJyZXBpYW5kbyBkZSBlbW/Dp8Ojbw==",
                "QWNlbGVyYW5kbyBvIGNvcmHDp8Ojbw==",
                "RGV0b25hbmRvIG5vIHBhZ29kw6Nv",
                "TmEgbGV2YWRhIGRvIG5lZ8Ojbw==",
                "TmEgcHV4YWRhIGRvIHB1dMOjbw=="
        ];
		
        output = "";
        for(i = 0; i <= 7; i++) {
        		var rand = Math.floor(Math.random() * 6);
                output += b64_to_utf8(trechos[i][rand])+"<br/>";
                if(i==3) output += "<br/>"; // estrofe
        }
        return output;
}

function b64_to_utf8( str ) {
    return decodeURIComponent(escape(window.atob( str )));
}