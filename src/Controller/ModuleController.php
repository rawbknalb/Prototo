<?php
namespace Osa\OsaMaker\Controller;

use Pagekit\Application as App;
use Osa\OsaMaker\Model\Module;
use Osa\OsaMaker\Model\Assessment;
use Osa\OsaMaker\Model\Item;

/**
 * @Route("module", name="module")
 * @Access(admin=true)
 */
class ModuleController
{

    public function getAction(){
        $modules = Module::query()->related('items')->get();

        foreach($modules as $module){
            $module->items = array_values($module->items);
        }


        return array_values($modules);
    }

    // trigger @Route(osamaker/api/module/save)
    /**
     * @Request({"module": "array"}, csrf=true)
     */
    public function saveAction($data)
    {
        $module = Module::create([
            'created_at' => new \DateTime(),
        ]);

        $module->save($data);
        return ['message' => 'success', 'module' => $module];

    }


    /**
     * @Request({"id": "int"}, csrf=true)
     */
    public function deleteAction($data){

        if ($module = Module::find($data)) {

            $query = App::db()->createQueryBuilder();
            $deleteitem = $query
                ->select('*')
                ->from('@osa_items')
                ->where('module_id = ?', [$data])
                ->delete();

            $module->delete();
        }

        return ['message' => 'success'];
    }

    /**
     * @Request({"module": "array"}, csrf=true)
     */
    public function editAction($data)
    {

        if ($module = Module::query()->where(['id' => $data['id']])->related('items')->first()) {

            // sets the item_order in the db
            foreach($data['items'] as $i => $itemData){
                $itemData['item_order'] = $i;

                // saves each item with the posted itemData in the db
                $item = Item::find($itemData['id']);
                $item->save([
                    'text' => $itemData['text'],
                    'item_order' => $itemData['item_order'],
                    'data' => $itemData['data'],
                    'modified_at' => new \DateTime()

                ]);
            }

            // puts each item id which was posted in the $data in an array
            $itemKeysInData = [];
            foreach($data['items'] as $item){
                $itemKeysInData[] = $item['id'];
                // [1,2,3,4,5]
            }

            // checking for each item in the db, if the id's in the db
            // are in the posted $data. If a itemID ist not in the array
            // $itemsKeysInData, the item gets deleted.
            foreach($module->items as $item){
                $itemExistsInData = in_array($item->id, $itemKeysInData);

                if(!$itemExistsInData){
                    $item->delete();
                }
            }

            //module edit
            $module->save([
                'title' => $data['title'],
                'data' => $data['data'],
                'modified_at' => new \DateTime(),
                'roles' => $data['roles']
            ]);
        }

        return ['message' => 'success'];

    }


}
