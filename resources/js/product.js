// 商品編集（input要素を入力可能にする処理）
$(".showOkBtn").click(function (e) {
    // クリックしたボタンを取得
    // split関数で_の後の部分（$allProduct_id）を付与
    let clickedEditBtn = $(`#showOkBtn_${e.target.id.split("_")[1]}`);

    // okボタンを取得
    let okBtn = $(`#product_${e.target.id.split("_")[1]}`);

    // hiddenクラスを追加しクリックした編集ボタンの表示を消す
    clickedEditBtn.addClass("hidden");

    // okボタンに初期でつけているhiddenクラスを削除
    okBtn.removeClass("hidden");

    // inputエレメントを取得
    let inputElm = $(`#product_name_${e.target.id.split("_")[1]}`);

    // 変更を許可するためreadonlyをfalseに設定
    inputElm.attr("readonly", false);

    // 編集可能な場合のクラスの削除と追加
    inputElm.removeClass("border-none bg-transparent");
    inputElm.addClass("border-[1px] border-sky-600");
});


// 商品編集（input要素に入力して保存する処理）
$(".clickClass").click(function (e) {
    // クリックしたボタンを取得
    let clickedEditBtn = $(`#showOkBtn_${e.target.id.split("_")[1]}`);

    // okボタンを取得
    let okBtn = $(`#product_${e.target.id.split("_")[1]}`);

    // inputエレメントを取得
    let inputElm = $(`#product_name_${e.target.id.split("_")[1]}`);

    // inputエレメントの値をidをもとに取得/splitを使用し数字だけを使用
    let product_name = $(`#product_name_${e.target.id.split("_")[1]}`).val();

    // console.log(product_name.validate(inputValidation));

    if (product_name === "") {
        alert('商品名を入力してください');
    } else {
        // hiddenクラスを削除し編集ボタンの表示を戻す
        clickedEditBtn.removeClass("hidden");
    
        // 保存終了後okボタンの表示を消す
        okBtn.addClass("hidden");

        // 保存終了後inputエレメントをreadonlyに設定
        inputElm.attr("readonly", true);
    
        // 編集可能な場合のクラスの削除と追加
        inputElm.removeClass("border border-white bg-gray-500");
        inputElm.addClass("border-none bg-transparent");
    
        // csrf対策の設定
        $.ajaxSetup({
            headers: {
                "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content"),
            },
        });
    
        // idにクリックした編集ボタンのidを代入
        let id = e.target.id;
    
        $.ajax({
            // 通信方法指定
            method: "post",
    
            // データ送信先
            url: "/dashboard/update",
            // processData: false,
    
            // データタイプにhtmlを指定
            dataType: "html",
            data: {
                // クリックしたokボタンのidの数字だけ取得し代入
                product_id: id.split("_")[1],
    
                product_name: product_name,
            },
        })
            .done((res) => {
                alert(`${product_name} を登録しました`);
                console.log("登録完了");
            })
            //通信が失敗したとき
            .fail((error) => {
                console.log(error);
                console.log("エラー");
            });
    }
});


// 商品削除
$(".deleteBtn").click(function (e) {
    // csrf対策の設定
    $.ajaxSetup({
        headers: {
            "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content"),
        },
    });

    let id = e.target.id;

    $.ajax({
        method: "POST",

        url: "/dashboard/delete",

        dataType: "html",

        data: {
            product_id: id.split("_")[1],
        }
    })
        .done((res) => {
            // 削除完了後画面を更新
            window.location.reload();
        })
        .fail((error) => {
            console.log(error);
            console.log("エラー");
        });
});

// 商品並び替え
// セレクトボックスの値が変更されるとsubmitされてrequestの値をProductControllerで受け取る
$('#sort').change(function () {
    $('#form').submit();
})

// 商品並び替え
// $('#sort').change(function(e) {

//     let sort = e.target.value;

//     $.ajax({
//         // 通信方法をgetに指定
//         method: "GET",

//         // データ送信先を指定
//         url: "/dashboard/sort",

//         // データタイプにhtmlを指定
//         dataType: "html",

//         data: {
//             sort: sort,
//         }
//     })
//         .done((res) => {
//             console.log('並び替え完了');
//         })
//         .fail((error) => {
//             console.log('エラー:',error);
//         })
// })
