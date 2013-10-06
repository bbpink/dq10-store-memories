$(function() {
	$("p.btn_reload > a.button").after('<a class="button" href="" id="downloadBtn">すべてダウンロード</a>');

	$("#downloadBtn").click(function() {
		if (!confirm("すべての思い出をダウンロードします。よろしいですか？"))
		  return false;

		$("a.showLargePict").each(function() {
			var rawuri = $(this).find("img").attr("src");
			var target = rawuri.replace("thum2", "original") + "?dl";

			$.ajax({url:target, type:"GET", async:false}).done(function(msg) {
				alert(msg);
			});
			return false;
			//http://img.dqx.jp/smpicture/download/webpicture/947801902744/original/92776439/?dl
		});

		return false;
	});
});