<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            {{ __('CSVアップロード') }}
        </h2>
    </x-slot>

    <div class="py-5 sm:py-12">
        {{-- multipart/form-data:複数の種類のデータを一度に扱える形式・ファイルアップロードの際は指定が必須 --}}
        <div class="w-full">
            <form action="{{ route('csv.import') }}" method="post" enctype="multipart/form-data" class="flex flex-col border-2 border-gray-500 bg-white w-[85%] mx-auto p-5 rounded-lg">
                {{-- @csrfでクロスサイトリクエストフォージェリ（認証済みユーザーに代わって不正なコマンドを実行する攻撃の一種）からアプリケーションを保護できる --}}
                @csrf
                <input type="file" name="csvData" id="csvData">
                <input type="submit" class="w-40 sm:w-56 mt-3 text-white text-sm py-2 px-4 bg-gradient-to-tr from-emerald-500 to-green-600 focus:ring-1 hover:opacity-90 rounded-lg">
            </form>
        </div>
    </div>
</x-app-layout>
