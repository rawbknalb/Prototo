<?php

namespace Osa\OsaMaker\Model;

use Pagekit\Database\ORM\ModelTrait;

// targetEntity: The target model class
// keyFrom: foreign key in this table pointing to the related model
// keyTo: primary key in the related model
/**
 * @Entity(tableClass="@osa_items")
 */
class Item
{
    use ModelTrait;
    /** @Column(type="integer") @Id */
    public $id;
    /** @Column(type="integer") */
    public $module_id;
    /** @Column(type="text") */
    public $text;
    /** @Column(type="integer") */
    public $item_order;
    // /** @Column(type="json_array") */
    // public $options;
    /** @Column(type="json_array") */
    public $data;
    /** @Column(type="datetime") */
    public $created_at;
    /** @Column(type="datetime") */
    public $modified_at;
    // /**
    //  * @BelongsTo(targetEntity="Questiongroup", keyFrom="questiongroup_id")
    //  */
    // public $questiongroup;
}
