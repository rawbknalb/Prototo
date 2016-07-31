<?php

namespace Osa\OsaMaker\Model;

use Pagekit\Database\ORM\ModelTrait;

// targetEntity: The target model class
// keyFrom: foreign key in this table pointing to the related model
// keyTo: primary key in the related model
/**
 * @Entity(tableClass="@osa_assessments")
 */
class Assessment
{
    use ModelTrait;
    /** @Column(type="integer") @Id */
    public $id;
    /** @Column(type="string") */
    public $title;
    /** @Column(type="integer") */
    public $roles;
    /** @Column(type="datetime") */
    public $created_at;
    /** @Column(type="datetime") */
    public $modified_at;

    /**
     * @ManyToMany(targetEntity="Questiongroup", tableThrough="@osa_assessments_questiongroups_mapping", keyThroughFrom="assessment_id", keyThroughTo="questiongroup_id", orderBy="questiongroup_order")
     */
    public $questiongroups;
}
