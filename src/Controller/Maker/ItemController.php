<?php
namespace Osa\OsaMaker\Controller\Maker;

use Pagekit\Application as App;
use Osa\OsaMaker\Model\Item;
use Osa\OsaMaker\Model\Module;

/**
 * @Route("item", name="item")
 * @Access(admin=true)
 */
class ItemController
{

    public function getAction(){
        $items = Item::findAll();
        return array_values($items);
    }

    /**
     * @Request({"item": "array"}, csrf=true)
     */
    public function saveAction($data)
    {
        // todo: mit robi abklären die genaue options und data struktur

        // return $data;

        $itemOrder = Item::where(['module_id' => $data['module_id']])->count();

        $item = Item::create([
            'module_id' => $data['module_id'],
            'text' => $data['text'],
            'data' => $data['data'],
            'item_order' => $itemOrder,
            'created_at' => new \DateTime()
        ]);

        $item->save();

        return ['message' => 'success', 'item' => $item];
    }

    /**
     * @Request({"id": "int"}, csrf=true)
     */
    public function deleteAction($data){

        if ($item = Item::find($data)) {

            $item->delete();
        }

        return ['message' => 'success'];
    }

    // /**
    //  * @Request({"items": "array"}, csrf=true)
    //  */
    // public function bulkEditAction($data)
    // {
    //     foreach($data as $i => $item){
    //         $item['item_order'] = $i;
    //
    //         $this->editAction($item);
    //     }
    //
    //     return ['message' => 'success'];
    //
    // }
    //
    // /**
    //  * @Request({"item": "array"}, csrf=true)
    //  */
    // public function editAction($data){
    //     $item = Item::find($data['id']);
    //     $item->save([
    //         'text' => $data['text'],
    //         'item_order' => $data['item_order'],
    //         'options' => $data['options'],
    //         'data' => $data['data'],
    //         'modified_at' => new \DateTime()
    //     ]);
    //
    //     return ['message' => 'success', 'item' => $item];
    // }
}
