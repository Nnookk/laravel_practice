<div class="bg-white overflow-hidden mt-1 shadow-md sm:rounded-lg">
    <div class="p-3 sm:p-6 text-gray-900 w-full">
        <table class="grid table-auto w-full border-[1px] border-white">
            <tbody class="rounded-lg">

                <tr class="grid grid-cols-6 bg-gradient-to-r from-gray-600 to-gray-800 text-white items-center h-10 border-[1px] border-gray-800 rounded-t-sm">
                    <th class="col-span-3 sm:col-span-2">商品ID</th>
                    <th class="col-span-3 sm:col-span-2">商品名</th>
                    <th class="hidden sm:grid sm:col-span-1">編集</th>
                    <th class="hidden sm:grid sm:col-span-1">削除</th>
                </tr>
                @foreach ($allProducts as $allProduct)
                    <tr class="grid grid-cols-6 items-center odd:bg-white even:bg-gray-100 border-b-[1px] border-x-[1px] border-gray-500 last:rounded-b-sm" id="row_{{ $allProduct->id }}">
                        <td class="col-span-3 p-2 sm:col-span-2 text-center">
                            <input type="text" id="{{ $allProduct->id }}" value="{{ $allProduct->id }}" class="text-center w-full bg-transparent outline-none border-none rounded-lg" readonly>
                        </td>
                        <td class="col-span-3 sm:col-span-2 text-center">
                            <input type="text" value="{{ $allProduct->product_name }}" id="product_name_{{ $allProduct->id }}" class="product_name w-full text-center bg-transparent outline-none border-none rounded-lg" readonly>
                        </td>
                        <td class="col-span-3 sm:col-span-1 text-center">
                            <x-button class="showOkBtn px-3 py-1.5 bg-gradient-to-tr from-lime-500 to-green-600" id="showOkBtn_{{ $allProduct->id }}">編集</x-button>
                            <x-button class="clickClass px-3 py-1.5 bg-gradient-to-tr from-teal-500 to-green-600 hidden" id="product_{{ $allProduct->id }}">OK</x-button>
                        </td>
                        <td class="col-span-3 sm:col-span-1 text-center">
                            <x-button class="deleteBtn px-3 py-1.5 bg-gradient-to-tr from-rose-500 to-red-600" id="deleteBtn_{{ $allProduct->id }}">削除</x-button>
                        </td>
                    </tr>
                @endforeach
            </table>
        </tbody>
        <div class="mt-3">
            {{ $allProducts->links() }}
        </div>
    </div>
</div>